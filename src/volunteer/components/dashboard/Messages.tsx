
import React, { useState } from 'react';
import { Search, Image, Send, Paperclip, MoreVertical } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState(0);
  const [messageText, setMessageText] = useState('');

  const contacts = [
    {
      id: 1,
      name: 'Emma Reynolds',
      avatar: '',
      lastMessage: 'Thanks for joining the tree planting event!',
      time: '2m ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Green Earth Alliance',
      avatar: '',
      lastMessage: 'Event reminder: Tomorrow at 10 AM',
      time: '1h ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Community Team',
      avatar: '',
      lastMessage: 'Great work everyone! See you next week',
      time: '3h ago',
      unread: 1,
      online: true
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      avatar: '',
      lastMessage: 'Can you help with the food distribution?',
      time: '5h ago',
      unread: 0,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Emma Reynolds',
      content: 'Hi! Thanks for volunteering for our tree planting event.',
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'My pleasure! Looking forward to it.',
      time: '10:32 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Emma Reynolds',
      content: 'Great! Meet us at Central Park entrance at 10 AM sharp.',
      time: '10:35 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'Perfect, I\'ll be there!',
      time: '10:36 AM',
      isOwn: true
    }
  ];

  return (
    <div className="h-[calc(100vh-120px)] flex bg-white rounded-lg shadow-sm border">
      {/* Contacts List */}
      <div className="w-80 border-r bg-gray-50">
        <div className="p-4 border-b bg-white">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
        </div>
        
        <div className="overflow-y-auto">
          {contacts.map((contact, index) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(index)}
              className={`p-4 border-b cursor-pointer hover:bg-white transition-colors ${
                selectedContact === index ? 'bg-white border-l-4 border-l-blue-600' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {contact.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                    <span className="text-xs text-gray-500">{contact.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                    {contact.unread > 0 && (
                      <span className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b bg-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={contacts[selectedContact]?.avatar} />
              <AvatarFallback>
                {contacts[selectedContact]?.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-gray-900">{contacts[selectedContact]?.name}</h3>
              <p className="text-sm text-gray-500">
                {contacts[selectedContact]?.online ? 'Online' : 'Last seen 2h ago'}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isOwn
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.isOwn ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t bg-white">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Image className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <Input
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="border-0 bg-gray-100 focus:bg-white"
              />
            </div>
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
