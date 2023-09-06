import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import { Observable } from 'rxjs';
import { Ad } from 'src/app/core/_models/Ad';
import { Banner } from 'src/app/core/_models/Banner';
const routes = {
  ad: () => `/ad`,
  adWithId: (id: string) => `/ad/${id}`,
  banner: () => `/banner`,
  bannerWithId: (id: string) => `/banner/${id}`
};
@Injectable({
  providedIn: 'root'
})
export class BannerService {
  route = '/marketbannerservice';
  constructor(private api: ApiService) {}

  getAllAds(): Observable<Ad[]> {
    return this.api.get<Ad[]>(this.route + routes.ad(), Ad);
  }
  getAd(id: string): Observable<Ad> {
    return this.api.get<Ad>(this.route + routes.adWithId(id), Ad);
  }
  addAd(ad: Ad): Observable<Ad> {
    return this.api.post<Ad>(this.route + routes.ad(), ad, Ad);
  }
  updateAd(ad: Ad): Observable<Ad> {
    return this.api.put<Ad>(this.route + routes.adWithId(ad._id), ad, Ad);
  }
  deleteAd(id: string): Observable<Ad> {
    return this.api.delete<Ad>(this.route + routes.adWithId(id), Ad);
  }
  getAllBanners(): Observable<Banner[]> {
    return this.api.get<Banner[]>(this.route + routes.banner(), Banner);
  }
  getBanner(id: string): Observable<Banner> {
    return this.api.get<Banner>(this.route + routes.bannerWithId(id), Banner);
  }
  addBanner(banner: Banner): Observable<Banner> {
    return this.api.post<Banner>(this.route + routes.banner(), banner, Banner);
  }
  updateBanner(banner: Banner): Observable<Banner> {
    return this.api.put<Banner>(
      this.route + routes.bannerWithId(banner._id),
      banner,
      Banner
    );
  }
  deleteBanner(id: string): Observable<Banner> {
    return this.api.delete<Banner>(
      this.route + routes.bannerWithId(id),
      Banner
    );
  }
}
