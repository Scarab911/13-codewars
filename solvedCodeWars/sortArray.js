sortme = function( names ){
    names.sort()    //metodas isrusiuoja areju pagal kaska
    console.log(names);
    return names
  }

  console.log(sortme(['one', 'two', 'three' ]), '->', ["one", "three", "two"]);