import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion( question: Question ) {
    this.questions.unshift(question);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  removeQuestion( question: Question ) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
        break;
      }
    }
  }
}
