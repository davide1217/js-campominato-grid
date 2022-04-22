/*stampare tutti i blocchi con i numeri
  dargli le classi */

  const container = document.querySelector('main > ._container');
  const btn = document.querySelector('button');
  
/*
  ( ho provato ad eliminare i quadrati in seguito a un ulteriore click sul buttone,
    l'if commentata, ma mi sono arrangiato con un alert :) )
    
  if(document.getElementById('difficolta').value === 'uno' && changer){
    square.classList.add('d-none');
    changer = false;
}*/
  
  let changer = false;
    
  /*btn.addEventListener('click', function conclude(){
    if(document.getElementById('difficolta').value === 'uno'){
      if(changer){
        alert('ricarica la pagina per cambiare difficoltà o rigiocare')
      } else{
        for(let i = 1; i <= 100; i++){
          const square = createLayout(container);
          square.className = 'square100';
          const num = document.createElement('span');
          num.innerHTML = i;
          square.append(num);
          square.addEventListener('click', function(){
            this.classList.add('clicked');
          })
        }
      }
      changer = true;
    }
    else if(document.getElementById('difficolta').value === 'due'){
      if(changer){
        alert('ricarica la pagina per cambiare difficoltà o rigiocare')
      } else{
        for(let i = 1; i <= 81; i++){
          const square = createLayout(container);
          square.className = 'square81';
          const num = document.createElement('span');
          num.innerHTML = i;
          square.append(num);
          square.addEventListener('click', function(){
            this.classList.add('clicked');
          })
        }
      }
      changer = true;
    }
    else if(document.getElementById('difficolta').value === 'tre'){
      if(changer){
        alert('ricarica la pagina per cambiare difficoltà o rigiocare')
      } else{
        for(let i = 1; i <= 49; i++){
          const square = createLayout(container);
          square.className = 'square49';
          const num = document.createElement('span');
          num.innerHTML = i;
          square.append(num);
          square.addEventListener('click', function(){
            this.classList.add('clicked');
          })
        }
      }
      changer = true;
    }
    
  })

  function createLayout(contain){
    const square = document.createElement('div');
    contain.append(square);
    return square
  }*/



 btn.addEventListener('click', function(){
  if(changer){
    alert('ricarica la pagina per cambiare difficoltà o rigiocare')
  }
  else if(document.getElementById('difficolta').value === 'one' && changer){
    square.classList.add('d-none');
    changer = false;
  }
  else if(document.getElementById('difficolta').value === 'uno'){
    for(let i = 1; i <= 100; i++){
      const square = document.createElement('div');
      const num = document.createElement('span');
      num.innerHTML = i;
      square.append(num);
      square.classList.add('square100')
      container.append(square);
      square.addEventListener('click', function(){
        this.classList.add('clicked');
      })
      changer = true;
    }
  }
  else if(document.getElementById('difficolta').value === 'due'){
    
    for(let i = 1; i <= 81; i++){
      const square = document.createElement('div');
      const num = document.createElement('span');
      num.innerHTML = i;
      square.append(num);
      square.classList.add('square81')
      container.append(square);
      square.addEventListener('click', function(){
        this.classList.add('clicked');
      })
      changer = true;
    } 
  }
  else if(document.getElementById('difficolta').value === 'tre'){
      for(let i = 1; i <= 49; i++){
        const square = document.createElement('div');
        const num = document.createElement('span');
        num.innerHTML = i;
        square.append(num);
        square.classList.add('square49')
        container.append(square);
        square.addEventListener('click', function(){
          this.classList.add('clicked');
        })
        changer = true;
      }
    }
  
 });
  
  

  

 
  
