import { API_PATH } from '../constants';
import ApiService from '../services/api-service';


 export class OrderForm {
    constructor() {
        this.formEl = document.getElementById('orderForm');
        this.mastersSelect = this.formEl.elements.masterId;
        this.servicesSelect = this.formEl.elements.serviceId;
    
        this._init();
        this._bindEvents();

        var phone = document.getElementById('phone');
        var phoneMask = {
            mask: '+7(000)000-00-00'
        }
        var mask = new IMask(phone, phoneMask);
    }

    _init() {
        this._buildMastersSelect();
        this._buildServicesSelect();
    }

    _bindEvents() {
        this.formEl.addEventListener('submit', event => {
            event.preventDefault();

            this.validateForm();

            this._validationOrder();
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

    async _createOrder(){
        let formData = new FormData(this.formEl);
        var orderData = {};
        formData.forEach((value, key) => {
            orderData[key] = value;
        });
        return await ApiService.createOrder(orderData);
    }

    message() {
        let text = document.createElement('p'),
            del = document.getElementsByClassName('form-control'),
            delBtn = document.getElementById('btn-submit');
        text.innerHTML = 'Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер.';

        this.formEl.removeChild(delBtn);
        for (var i = del.length; i > 0; i--) {
            this.formEl.removeChild(del[i-1]);
        }

        this.formEl.appendChild(text);
        
    }

    async _validationOrder() {
        const response = await this._createOrder();
        if (response.ok) {
            this.message();

            setTimeout(() => {
                $('.form_ext').removeClass('form_active');
            }, 3000);
            
        }
    }

    validateForm() {

        var errors = orderForm.querySelectorAll('.error');
                for (var i = 0; i < errors.length; i++) {
                    errors[i].remove();
                };

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

}

/* модальное окно с развернутой формой */

$(function () {
    $('.ext_form').click(function () {
        $('.form_ext').addClass('form_active');
    });

    $('.expert__item').click(function () {
        $('.form_ext').addClass('form_active');
    });

    $('.close-btn').click(function() {
        $('.form_ext').removeClass('form_active');
    });
});