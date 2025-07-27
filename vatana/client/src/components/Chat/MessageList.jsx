import React, { useEffect, useRef, useMemo } from 'react';
import { Check, CheckCheck } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getYoutubeThumbnail } from '../../utils/getYoutubeThumbnail';

const MessageList = ({ messages, loading }) => {
  const { user } = useAuth();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  // Debug logging to check IDs
  console.log('Current user:', user);
  console.log('Sample message:', messages[0]);

  // Memoize processed messages to avoid recalculation on every render
  const processedMessages = useMemo(() => {
    let lastDate = '';
    return messages.map((message, index) => {
      const messageDate = formatDate(message.createdAt);
      const showDate = messageDate !== lastDate;
      lastDate = messageDate;

      // Try different possible sender ID properties
      const senderId = message.sender?.id || message.sender?._id || message.senderId || message.sender;
      const userId = user?.id || user?._id;
      const isOwn = senderId === userId;
      
      // Debug log for each message
      console.log(`Message ${index}:`, {
        sender: message.sender,
        senderId,
        userId,
        isOwn,
        content: message.content?.substring(0, 20)
      });

      const showAvatar = !isOwn && (index === 0 || messages[index - 1].sender.id !== message.sender.id);
      const thumbnail = getYoutubeThumbnail(message.content);

      return {
        ...message,
        messageDate,
        showDate,
        isOwn,
        showAvatar,
        thumbnail
      };
    });
  }, [messages, user?.id]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-lg mb-2">No messages yet</p>
          <p className="text-sm">Start the conversation by sending a message</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {processedMessages.map((message) => (
        <div key={message._id}>
          {message.showDate && (
            <div className="text-center my-4">
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm">
                {message.messageDate}
              </span>
            </div>
          )}

          <div className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'} mb-1`}>
            <div className={`flex ${message.isOwn ? 'flex-row-reverse' : 'flex-row'} items-end ${message.isOwn ? 'space-x-reverse space-x-2' : 'space-x-2'} max-w-xs lg:max-w-md`}>
              {message.showAvatar && !message.isOwn && (
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-semibold">
                    {message.sender.username.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}

              <div className={`flex flex-col ${message.isOwn ? 'items-end' : 'items-start'}`}>
                {!message.isOwn && message.showAvatar && (
                  <span className="text-xs text-gray-500 dark:text-gray-400 mb-1 px-3">
                    {message.sender.username}
                  </span>
                )}

                <div
                  className={`px-4 py-2 rounded-2xl w-fit transition-all duration-200 hover:shadow-md ${
                    message.isOwn
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none'
                  }`}
                >
                  {/* Show thumbnail if it's a YouTube link */}
                  {message.thumbnail ? (
                    <a 
                      href={message.content} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block hover:opacity-90 transition-opacity"
                    >
                      <img
                        src={message.thumbnail}
                        alt="YouTube Thumbnail"
                        className="rounded-lg mb-1 w-64 h-auto"
                        loading="lazy"
                      />
                      <p className="text-xs underline">Watch on YouTube</p>
                    </a>
                  ) : (
                    <p className="text-sm break-words whitespace-pre-wrap">{message.content}</p>
                  )}
                </div>

                <div className={`flex items-center mt-1 space-x-1 ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatTime(message.createdAt)}
                  </span>
                  {message.isOwn && (
                    <div className="text-gray-500 dark:text-gray-400">
                      {message.readBy && message.readBy.length > 1 ? (
                        <CheckCheck className="w-3 h-3 text-blue-400" />
                      ) : (
                        <Check className="w-3 h-3" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;