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
    return this.All().filter(function(questions){
      return this._All.indexOf(questions) === id-1
    })
  }
}

Question._All=[];
