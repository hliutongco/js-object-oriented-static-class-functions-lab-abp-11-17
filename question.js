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
    const test= this._All.filter(function(questions,index){
      return index===id-1;
    })
    return test[0];
  }
}

Question._All=[];
