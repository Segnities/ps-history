function sum(a:number, b:number) {
   return a + b;
}

describe('Foo test', ()=> {
   test('Should return 5', ()=> {
      expect(sum(4,1)).toBe(5);
   });
});