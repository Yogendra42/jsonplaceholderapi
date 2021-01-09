class Validation {
    result;
  
    static validate(key, value, callback = "") {
      switch (key) {
        case "email": {
          this.result = value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
          );
          return this.result;
        }
        
        default:
          return null;
      }
    }
  }
  
  export default Validation;
  