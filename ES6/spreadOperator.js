const arr1=[1,2,3,4];
const arr2=[5,6,7,8];
const arr3=[...arr1];
const arr4=[...arr1,...arr2];

const myInfo={
    id:1,
    userName:"ABC"
};

const myAge={age:1};
const myNewInfo={...myInfo,...myAge};