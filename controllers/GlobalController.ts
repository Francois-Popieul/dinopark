import { Controller } from "../libs/Controller";

export class GlobalController extends Controller {
    public homepage() {
        console.log("Appel du contrôleur général");        
        this.response.render("pages/home", {});
    }
}