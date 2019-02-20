describe("My whatCanIDrink function", function() {
    
    it("should return 'Drink Toddy'", function()  {
        expect(whatCanIDrink(9)).toBe('Drink Toddy')     
    });
    
    it("should return 'Drink Coke'", function()  {
        expect(whatCanIDrink(17)).toBe('Drink Coke')     
    });
    
    it("should return 'Drink Beer'", function()  {
        expect(whatCanIDrink(19)).toBe('Drink Beer')     
    });
    
    it("should return 'Drink Whisky'", function()  {
        expect(whatCanIDrink(82)).toBe('Drink Whisky')     
    });
    
    it("should return 'Sorry'", function()  {
        expect(whatCanIDrink(-1)).toContain('Sorry')     
    });
    
    it("should return 'Sorry'", function()  {
        expect(whatCanIDrink('ten')).toContain('Sorry')     
    });
    
});