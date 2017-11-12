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
    return this.All().filter(function(questions,index){
      return Question("What city were you born in?")
    })
  }
}

Question._All=[];
