import { ChangedVO } from './ChangedVO';


export class Eip {
    private 'protected'?: ChangedVO;
    public total?: number;
    public constructor() { 
    }
    public withProtected(_protected: ChangedVO): Eip {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: ChangedVO  | undefined) {
        this['protected'] = _protected;
    }
    public get _protected(): ChangedVO | undefined {
        return this['protected'];
    }
    public withTotal(total: number): Eip {
        this['total'] = total;
        return this;
    }
}