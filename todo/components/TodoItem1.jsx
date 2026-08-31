import React from 'react'

export default function TodoItem1() {

      let Todoname="buy milk";
       let Tododate='4/5/2023';
  return (
   
   
      <div class="container text-center">
        <div class="row">
          <div class="col-6">{Todoname}</div>
          <div class="col-4">{Tododate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
    </div>
  )
}
