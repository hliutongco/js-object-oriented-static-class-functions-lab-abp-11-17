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
    return this.All().filter(function(questions,index){
      return index===id-1
    })
  }
}

Question._All=[];
