import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/core';
import { Article } from 'src/app/core/_models/Article';
import { Review } from '../../_models/Review';

const routes = {
  article: () => `/article`,
  update: () => `/updateQty`,
  activeArticles: () => `/getActiveArticles`,
  articleWithId: (id: string) => `/article/${id}`,
  articleByCategory: (id: string) => `/getByCategory/${id}`,
  articleBySubCategory: (id: string) => `/getBySubCategory/${id}`,
  articleInDiscount: () => `/getByDiscount`,
  review: () => `/review`,
  reviewWithId: (id: string) => `/review/${id}`,
  reviewByArticle: (id: string) => `/getByArticle/${id}`,
  
};
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  route = '/marketarticleservice';
  constructor(private api: ApiService) {}

  getAllArticles(): Observable<Article[]> {
    return this.api.get<Article[]>(this.route + routes.activeArticles(), Article);
  }
  getArticlesByCategory(id:string): Observable<Article[]> {
    return this.api.get<Article[]>(this.route + routes.articleByCategory(id), Article);
  }
  getArticlesBySubCategory(id:string): Observable<Article[]> {
    return this.api.get<Article[]>(this.route + routes.articleBySubCategory(id), Article);
  }
  getArticlesInDiscount(): Observable<Article[]> {
    return this.api.get<Article[]>(this.route + routes.articleInDiscount(), Article);
  }
  getArticle(id: string): Observable<Article> {
    return this.api.get<Article>(
      this.route + routes.articleWithId(id),
      Article
    );
  }
  addArticle(article: Article): Observable<Article> {
    return this.api.post<Article>(
      this.route + routes.article(),
      article,
      Article
    );
  }
  updateArticle(article: Article): Observable<Article> {
    return this.api.put<Article>(
      this.route + routes.articleWithId(article._id),
      article,
      Article
    );
  }
  updateArticlesQty(array: any): Observable<boolean> {
    return this.api.put<boolean>(
      this.route + routes.update(),
      {data:array},
      Boolean
    );
  }
  deleteArticle(id: string): Observable<Article> {
    return this.api.delete<Article>(
      this.route + routes.articleWithId(id),
      Article
    );
  }


  /* Review */

  getReviews(): Observable<Review[]> {
    return this.api.get<Review[]>(this.route + routes.review(), Review);
  }
  getArticleReviews(id:string): Observable<Review[]> {
    return this.api.get<Review[]>(this.route + routes.reviewByArticle(id), Review);
  }
  getReview(id: string): Observable<Review> {
    return this.api.get<Review>(
      this.route + routes.reviewWithId(id),
      Review
    );
  }
  addReview(article: Review): Observable<Review> {
    return this.api.post<Review>(
      this.route + routes.review(),
      article,
      Review
    );
  }
  updateReview(article: Review): Observable<Review> {
    return this.api.put<Review>(
      this.route + routes.reviewWithId(article._id),
      article,
      Review
    );
  }
}
