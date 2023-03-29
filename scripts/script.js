let arr1 = [1, 2, 3];
         let arr2 = [4, 5, 6];

         let arr = ["a", ...arr1, "b", "c", ...arr2];
         console.log(arr);

         let arr21 = [1, 2, 3];
         let arr22 = [4, 5, 6];

         let arr23 = ["a", ...arr21, ...arr22, "b", "c"];
         console.log(arr23);

         let arr31 = [1, 2, 3];
         let arr32 = [...arr31, 4, 5, 6];

         let arr33 = ["a", "b", "c", ...arr32];
         console.log(arr33);

         let arr41 = [1, 2, 3];
         let arr42 = [...arr41, 4, 5, 6];
         let arr43 = [...arr42, 7, 8, 9];

         let arr44 = [0, ...arr43];
         console.log(arr44);

         let arr51 = [1, 2, 3];
         let arr52 = [...arr1];

         console.log(arr52);