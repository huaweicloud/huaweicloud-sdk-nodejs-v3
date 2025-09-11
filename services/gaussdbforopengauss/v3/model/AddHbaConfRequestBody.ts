import { HbaConfOption } from './HbaConfOption';


export class AddHbaConfRequestBody {
    private 'hba_confs'?: Array<HbaConfOption>;
    public constructor() { 
    }
    public withHbaConfs(hbaConfs: Array<HbaConfOption>): AddHbaConfRequestBody {
        this['hba_confs'] = hbaConfs;
        return this;
    }
    public set hbaConfs(hbaConfs: Array<HbaConfOption>  | undefined) {
        this['hba_confs'] = hbaConfs;
    }
    public get hbaConfs(): Array<HbaConfOption> | undefined {
        return this['hba_confs'];
    }
}