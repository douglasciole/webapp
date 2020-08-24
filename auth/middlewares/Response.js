function Response(cod) {
    this.cod = cod;
    this.hash = {};
    this.resList = {
        1 : {status: 1, message: 'Success'},
        401 : {status: 401, message: 'Access denied'},
        403 : {status: 403, message: 'Forbidden'},
        500 : {status: 500, message: 'Internal Server Error'}
    }
    if (this.cod != null) {
        this.hash = this.resList[cod];
    }

    if (!this.hash) {
        this.hash = {status: this.cod, message: ''};
    }

    this.addKey = function(key, value) {
        this.hash[key] = value;
    }

}
  
module.exports = Response;