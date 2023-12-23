import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Входящие', url: '/folder/inbox', icon: 'входящие' },
    { title: 'Исходящие', url: '/folder/outbox', icon: 'исходящие' },
    { title: 'Понравилось', url: '/folder/favorites', icon: 'понравившиеся' },
    { title: 'Архив', url: '/folder/archived', icon: 'архив' },
    { title: 'Корзина', url: '/folder/trash', icon: 'корзина' },
    { title: 'Спам', url: '/folder/spam', icon: 'предупреждения/спам' },
    // Добавляем поле для перехода на страницу пометок
    { title: 'Пометки', url: '/notes', icon: 'Пометки' },
    { title: 'Filters', url:'/filters',icon: 'reader-outline'},
    { title: 'Validations', url: '/validations', icon: '' },  
    { title: 'policy-privacy', url: '/privacy-policy', icon: 'battery-full-outline' },
    { title: 'Login', url: '/login', icon: '' },
  ];
  public labels = ['Семья', 'Друзья', 'Заметки', 'Работа', 'Путешествия', 'Напоминания'];
  constructor() { }
}
