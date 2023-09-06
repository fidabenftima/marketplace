import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/core';
import { Admin } from 'src/app/core/_models/user/Admin';
import { Customer } from 'src/app/core/_models/user/Customer';
import { Provider } from 'src/app/core/_models/user/Provider';
import { Settings } from 'src/app/core/_models/Settings';

const routes = {
  connectAdmin: (login: string, password: string) =>
    `/connect/${login}/${password}`,
    connectCustomer: (login: string, password: string) =>
    `/connectCustomer/${login}/${password}`,
  Admin: () => `/admin`,
  getAdmin: (id: string) => `/admin/${id}`,
  getAllCustomers: () => `/customer`,
  addCustomers: () => `/addCustomer`,
  getCustomer: (id: string) => `/customer/${id}`,
  getCustomerByMail: (mail: string) => `/getCustomerByMail/${mail}`,
  token: () => `/newToken`,
  confirmMail: () => `/confirmCustomerMail`,
  getAllProviders: () => `/provider`,
  newprovider: () => `/provider`,
  getProvider: (id: string) => `/provider/${id}`,
  settings: () => `/settings`,
  settingsWithId: (id: string) => `/settings/${id}`
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  route = '/marketuserservice';
  constructor(private api: ApiService) {}
  /* Admin */
  getAdminByLoginAndPassword(
    login: string,
    password: string
  ): Observable<Admin> {
    return this.api.get<Admin>(
      this.route + routes.connectAdmin(login, password),
      Admin
    );
  }
  getAdminById(id: string): Observable<Admin> {
    return this.api.get<Admin>(this.route + routes.getAdmin(id), Admin);
  }
  getAllAdmins(): Observable<Admin[]> {
    return this.api.get<Admin[]>(this.route + routes.Admin(), Admin);
  }
  addAdmin(admin: Admin): Observable<Admin> {
    return this.api.post<Admin>(this.route + routes.Admin(), admin, Admin);
  }
  updateAdmin(id: string, admin: Admin): Observable<Admin> {
    return this.api.put<Admin>(this.route + routes.getAdmin(id), admin, Admin);
  }
  /* Customer */
  getCutstomerByLoginAndPassword(
    login: string,
    password: string
  ): Observable<Customer> {
    return this.api.get<Customer>(
      this.route + routes.connectCustomer(login, password),
      Customer
    );
  }
  getAllCustomers(): Observable<Customer[]> {
    return this.api.get<Customer[]>(
      this.route + routes.getAllCustomers(),
      Customer
    );
  }
  getCustomerByMail(mail: string): Observable<Customer> {
    return this.api.get<Customer>(
      this.route + routes.getCustomerByMail(mail),
      Customer
    );
  }
  getCustomer(id: string): Observable<Customer> {
    return this.api.get<Customer>(
      this.route + routes.getCustomer(id),
      Customer
    );
  }
  createCustomer(customer: Customer): Observable<any> {
    return this.api.post<any>(
      this.route + routes.getAllCustomers(),customer,
      Customer
    );
  }
  addCustomer(customer: Customer): Observable<any> {
    return this.api.post<any>(
      this.route + routes.addCustomers(),customer,
      Customer
    );
  }
  confirmMail(token: string): Observable<any> {
    return this.api.post<any>(
      this.route + routes.confirmMail(),{token:token},
      Customer
    );
  }
newToken(id: string): Observable<String> {
    return this.api.post<String>(
      this.route + routes.token(),{id:id},
      String
    );
  }
  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.api.put<Customer>(
      this.route + routes.getCustomer(id),
      customer,
      Customer
    );
  }
  /* Provider */
  getAllProviders(): Observable<Provider[]> {
    return this.api.get<Provider[]>(
      this.route + routes.getAllProviders(),
      Provider
    );
  }
  addProvider(provider: Provider): Observable<Provider> {
    return this.api.post<Provider>(
      this.route + routes.newprovider(),
      provider,
      Provider
    );
  }
  getProviderById(id: string): Observable<Provider> {
    return this.api.get<Provider>(
      this.route + routes.getProvider(id),
      Provider
    );
  }
  updateProvider(id: string, provider: Provider): Observable<Provider> {
    return this.api.put<Provider>(
      this.route + routes.getProvider(id),
      provider,
      Provider
    );
  }
  deleteProvider(id: string): Observable<Provider> {
    return this.api.delete<Provider>(
      this.route + routes.getProvider(id),
      Provider
    );
  }

  /* Settings */
  getSettingsById(id: string): Observable<Settings> {
    return this.api.get<Settings>(
      this.route + routes.settingsWithId(id),
      Settings
    );
  }
  getSettings(): Observable<Settings> {
    return this.api.get<Settings>(this.route + routes.settings(), Settings);
  }
  addSettings(settings: Settings): Observable<Settings> {
    return this.api.post<Settings>(
      this.route + routes.settings(),
      settings,
      Settings
    );
  }
  updateSettings(settings: Settings): Observable<Settings> {
    return this.api.put<Settings>(
      this.route + routes.settingsWithId(settings._id),
      settings,
      Settings
    );
  }
}
