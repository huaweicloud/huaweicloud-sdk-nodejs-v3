import { HbaConfOption } from './HbaConfOption';


export class DeleteHbaConfRequestBody {
    private 'hba_confs'?: Array<HbaConfOption>;
    public constructor(hbaConfs?: Array<HbaConfOption>) { 
        this['hba_confs'] = hbaConfs;
    }
    public withHbaConfs(hbaConfs: Array<HbaConfOption>): DeleteHbaConfRequestBody {
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