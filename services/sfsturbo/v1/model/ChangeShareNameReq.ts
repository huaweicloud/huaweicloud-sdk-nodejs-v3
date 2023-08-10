import { ShareName } from './ShareName';


export class ChangeShareNameReq {
    private 'change_name'?: ShareName;
    public constructor(changeName?: ShareName) { 
        this['change_name'] = changeName;
    }
    public withChangeName(changeName: ShareName): ChangeShareNameReq {
        this['change_name'] = changeName;
        return this;
    }
    public set changeName(changeName: ShareName  | undefined) {
        this['change_name'] = changeName;
    }
    public get changeName(): ShareName | undefined {
        return this['change_name'];
    }
}