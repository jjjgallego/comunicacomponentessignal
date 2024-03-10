import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public shareData = signal<string>('Initial data...');
  constructor() { }
  
}
