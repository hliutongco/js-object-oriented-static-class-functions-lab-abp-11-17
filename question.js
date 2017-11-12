'use strict';
class Question{

  constructor(content){
    this.content=content;
    this.save();
  }

  save(){
    this.constructor._All.push(this);
  }

  static All(){
    return this._All;
  }

  static Find(id){
    let i=0;
    return this.All().filter(function(questions){
      ++i;
      return questions[i]===questions[id-1];
    })
  }
}

Question._All=[];
