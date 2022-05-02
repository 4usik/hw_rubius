// import { API_PATH } from "../constants";
import { HttpService } from "../services/http-service";

class MastersApi extends HttpService {
    constructor() {
        super('staff');
        // super('users');
    }

 /* Возвращает список сотрудников */
    getMasters(search = '') {
        return this.get(`?search=${search}`);
    }

    createMaster(masterDto) {
        const formData = new FormData();

        Object.keys(masterDto).forEach(key => formData.append(key, masterDto[key]));

        // formData.append('surName', masterDto.surName);

        return this.postFormData('', masterDto);
    }
}

export default new MastersApi();