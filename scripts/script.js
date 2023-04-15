let date = new Date();

         console.log(`Номер текущего дня недели ${date.getDay()}`);

         if (date.getDay() == 0 || date.getDay() == 6) {
          console.log(`${date.getDay()} - Выходной день`)
         } else {
          console.log(`${date.getDay()} - Рабочий день`)
         }

         console.log(`До воскресенья осталось ${6 - date.getDay()}`)