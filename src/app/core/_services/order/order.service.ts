import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/core';
import { Order } from 'src/app/core/_models/Order';
import { PaymentMethod, DeliveryMethod } from 'src/app/core/_models/Method';

const routes = {
  getAllOrders: () => `/order`,
  orderWithId: (id: string) => `/order/${id}`,
  orderStatus: (id: string) => `/orderStatus/${id}`,
  orderByCustomer: (id: string) => `/getOrderByCustomer/${id}`,
  paymentMethod: () => `/paymentMethod`,
  paymentMethodWithId: (id: string) => `/paymentMethod/${id}`,
  deliveryMethod: () => `/deliveryMethod`,
  deliverytMethodWithId: (id: string) => `/deliveryMethod/${id}`
};
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  route = '/marketorderservice';
  constructor(private api: ApiService) {}

  getAllOrders(): Observable<Order[]> {
    return this.api.get<Order[]>(this.route + routes.getAllOrders(), Order);
  }
  getOrder(id: string): Observable<Order> {
    return this.api.get<Order>(this.route + routes.orderWithId(id), Order);
  }
  addOrder(order:Order): Observable<Order> {
    return this.api.post<Order>(this.route + routes.getAllOrders(),order,Order);
  }
  getCustomerOrders(id:string): Observable<Order[]> {
    return this.api.get<Order[]>(this.route + routes.orderByCustomer(id), Order);
  }
  getAllPaymentMethods(): Observable<PaymentMethod[]> {
    return this.api.get<PaymentMethod[]>(
      this.route + routes.paymentMethod(),
      PaymentMethod
    );
  }
  getPaymentMethod(id: string): Observable<PaymentMethod> {
    return this.api.get<PaymentMethod>(
      this.route + routes.paymentMethodWithId(id),
      PaymentMethod
    );
  }
  addPaymentMethod(paymentMethod: PaymentMethod): Observable<PaymentMethod> {
    return this.api.post<PaymentMethod>(
      this.route + routes.paymentMethod(),
      paymentMethod,
      PaymentMethod
    );
  }
  updatePaymentMethod(paymentMethod: PaymentMethod): Observable<PaymentMethod> {
    return this.api.put<PaymentMethod>(
      this.route + routes.paymentMethodWithId(paymentMethod._id),
      paymentMethod,
      PaymentMethod
    );
  }
  deletePaymentMethod(id: string): Observable<PaymentMethod> {
    return this.api.delete<PaymentMethod>(
      this.route + routes.paymentMethodWithId(id),
      PaymentMethod
    );
  }

  getAllDeliveryMethods(): Observable<DeliveryMethod[]> {
    return this.api.get<DeliveryMethod[]>(
      this.route + routes.deliveryMethod(),
      DeliveryMethod
    );
  }
  getDeliveryMethod(id: string): Observable<DeliveryMethod> {
    return this.api.get<DeliveryMethod>(
      this.route + routes.deliverytMethodWithId(id),
      DeliveryMethod
    );
  }
  addDeliveryMethod(
    deliveryMethod: DeliveryMethod
  ): Observable<DeliveryMethod> {
    return this.api.post<DeliveryMethod>(
      this.route + routes.deliveryMethod(),
      deliveryMethod,
      DeliveryMethod
    );
  }
  updateDeliveryMethod(
    deliveryMethod: DeliveryMethod
  ): Observable<DeliveryMethod> {
    return this.api.put<DeliveryMethod>(
      this.route + routes.deliverytMethodWithId(deliveryMethod._id),
      deliveryMethod,
      DeliveryMethod
    );
  }
  deleteDeliveryMethod(id: string): Observable<DeliveryMethod> {
    return this.api.delete<DeliveryMethod>(
      this.route + routes.deliverytMethodWithId(id),
      DeliveryMethod
    );
  }
}
