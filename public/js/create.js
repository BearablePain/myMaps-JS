function viewRoute (id, ind) {
  // createForm.hidden = true;
  switch (true) {
    case id ==='drinck':
      obj = arr[0];
      break;
    case id ==='walk':
      obj = arr[1];
      break;
    case id ==='smart':
      obj = arr[2];
      break;
    case id ==='river':
      obj = arr[3];
      break;
    case id ==='center':
      obj = arr[4];
      break;
    case id ==='will':
      obj = arr[5];
      break;
    case id ==='sport':
      obj = arr[7];
      break;
    case id ==='babylya':
      obj = arr[6];
      break;
    case id.includes('myRoute'):
      obj = arr.filter(el => el.id == id.replace(/[A-z]/g,''))[0];
      break;
    default:
      return false;
  }
  map.hidden = false;
  initMap();

  groopCard.classList.add('d-none');
  let btnBack = document.createElement('button');
  btnBack.className = 'btn btn-primary p-3';
  btnBack.innerHTML = 'Назад';
  document.body.append(btnBack);
  //кнопка для возврата
  btnBack.addEventListener('click', () => {
    map.hidden = true;
    // createForm.hidden = false;

    groopCard.classList.remove('d-none');
    btnBack.remove();
  });
}