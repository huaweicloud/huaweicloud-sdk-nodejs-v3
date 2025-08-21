import { ChangedVO } from './ChangedVO';


export class Vpc {
    private 'protected'?: ChangedVO;
    public total?: number;
    public constructor() { 
    }
    public withProtected(_protected: ChangedVO): Vpc {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: ChangedVO  | undefined) {
        this['protected'] = _protected;
    }
    public get _protected(): ChangedVO | undefined {
        return this['protected'];
    }
    public withTotal(total: number): Vpc {
        this['total'] = total;
        return this;
    }
}