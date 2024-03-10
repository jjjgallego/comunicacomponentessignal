import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  shareData = signal<string>('Datos de inicio...');
  constructor() { }
  
}
