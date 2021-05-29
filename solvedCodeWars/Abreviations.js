function abbrevName(name){
    
    let initials = name[0].toUpperCase();

    for (let i = 1; i < name.length; i++) {
        
        if (name[i] === ' ') {
           initials += '.' + name[i+1].toUpperCase(); 
        } 
    }
    return initials;
}



test('Teisingai', () => {
    expect(abbrevName("sam harris")).toBe("S.H")
    expect(abbrevName("sAm HarriS")).toBe("S.H");
    expect(abbrevName("SAM HARRIS")).toBe("S.H");
    expect(abbrevName("Sam Harris")).toBe("S.H");
    expect(abbrevName("Patrick Feenan")).toBe("P.F");
    expect(abbrevName("Evan Cole")).toBe("E.C");
    expect(abbrevName("P Favuzzi")).toBe("P.F");
    expect(abbrevName("David Mendieta")).toBe("D.M");
})
