/**
 * Created by toni on 20.12.16.
 */
import { Injectable }    from '@angular/core';


@Injectable()
export class GlobalService {
    private _click:boolean = false;
    get click():boolean {
        return this._click;
    }
    set click(click:boolean) {
        this._click = click;
    }
}

