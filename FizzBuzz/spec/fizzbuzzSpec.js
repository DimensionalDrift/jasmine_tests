describe("My FizzBuzz function", function() {
   
//   divis3 = 3, 6, 9, 12;
//   divis5 = 5, 10, 20, 25;
//   divisboth = 15, 30, 45, 60;
   
    it("should return the number", function()  {
        expect(fizzbuzz(1)).toBe(1)     
    });
    
    it("should return Fizz", function()  {
        expect(fizzbuzz(3)).toBe('Fizz')     
    });
    
    it("should return Buzz", function()  {
        expect(fizzbuzz(5)).toBe('Buzz')     
    });
    
    it("should return FizzBuzz", function()  {
        expect(fizzbuzz(15)).toBe('FizzBuzz')     
    });
    
    it("should return NaN", function()  {
        expect(fizzbuzz('ten')).toBe('NaN')     
    });
    
});