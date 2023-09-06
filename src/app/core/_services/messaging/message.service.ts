import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import { Message, Mail } from 'src/app/core/_models/messaging';
import { Observable } from 'rxjs';

const routes = {
  //connectMessage: (login: string, password: string) =>`/connect/${login}/${password}`,
  getNewMessages: () => `/newMessaging`,
  getMessages: () => `/messaging`,
  getNewMessagesCount: () => `/countMessage`,
  message: (id: string) => `/messaging/${id}`,
  addMessage: () => `/messaging`,
  readMessage: (id: string) => `/readMessage/${id}`,
  sendMessage: () => `/sendMail`
};
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  route = '/marketmessagingservice';
  constructor(private api: ApiService) {}

  getNewMessages(): Observable<Message[]> {
    return this.api.get<Message[]>(
      this.route + routes.getNewMessages(),
      Message
    );
  }
  getMessages(): Observable<Message[]> {
    return this.api.get<Message[]>(this.route + routes.getMessages(), Message);
  }
  getNewMessagesCount(): Observable<any> {
    return this.api.get<any[]>(
      this.route + routes.getNewMessagesCount(),
      String
    );
  }
  sendMessage(message: Message): Observable<Message> {
    return this.api.post<Message>(
      this.route + routes.addMessage(),
      message,
      Message
    );
  }
  updateMessage(id: string, message: Message): Observable<Message> {
    return this.api.put<Message>(
      this.route + routes.message(id),
      message,
      Message
    );
  }
  readMessage(id: string): Observable<Message> {
    return this.api.put<Message>(
      this.route + routes.readMessage(id),
      null,
      Message
    );
  }
  deleteMessage(id: string): Observable<String> {
    return this.api.delete<String>(this.route + routes.message(id), String);
  }
  SendMail(mail: Mail): Observable<Boolean> {
    return this.api.post<Boolean>(
      this.route + routes.sendMessage(),
      mail,
      Boolean
    );
  }
}
