import { Timestamp } from "@angular/fire/firestore";

export interface RappelObj {
  docId?: string;
  title: string;
  date: string;         
  time: string;         
  reminderBefore: number; 
  priority: 'high' | 'medium' | 'low';
  note?: string;
  createdAt?: Timestamp;
}
