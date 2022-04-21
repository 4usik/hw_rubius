import ApiService from '../services/api-service';


 export class OrderForm {
    constructor() {
        this.formEl = document.getElementById('orderForm');
        this.mastersSelect = this.formEl.elements.masterId;
        this.servicesSelect = this.formEl.elements.serviceId;
    
        this._init();
        this._bindEvents();
    }

    _init() {
        this._buildMastersSelect();
        this._buildServicesSelect();
    }

    _bindEvents() {
        this.formEl.addEventListener('submit', event => {
            event.preventDefault();

            var errors = orderForm.querySelectorAll('.error');
                for (var i = 0; i < errors.length; i++) {
                    errors[i].remove();
                };

            function validate () {

                let fields = document.querySelectorAll('.field');
                

                for (var i = 0; i < fields.length; i++) {
                    if (!fields[i].value) {
                        fields[i].classList.add('highlight');
                        var error = document.createElement('div');
                        error.className='error';
                        error.style.color = 'red';
                        error.innerHTML = 'Необходимо заполнить поле';
                        fields[i].parentElement.insertBefore(error, fields[i]);
                    }
                }
                
            }
 
            let response = this.createOrder();
            // console.log(response);
            validate();
        });
    }

    async _buildMastersSelect() {
        const masters = await ApiService.getMasters();
        masters.forEach(master => {
            const option = document.createElement('option');
            option.value = master.id;
            option.textContent = master.fullName;
            this.mastersSelect.add(option);
        });
    }

    async _buildServicesSelect() {
        const services = await ApiService.getServices();
        services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.id;
            option.textContent = service.name;           
            this.servicesSelect.add(option);
        });
    }

    async createOrder(){
        let formData = new FormData(this.formEl);
        var orderData = {};
        formData.forEach((value, key) => {
            orderData[key] = value;
        });
        return await ApiService.createOrder(orderData);
    }

}