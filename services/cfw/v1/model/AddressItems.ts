import { AddressItemIdWithoutName } from './AddressItemIdWithoutName';
import { CoveredIPVO } from './CoveredIPVO';


export class AddressItems {
    public items?: Array<AddressItemIdWithoutName>;
    private 'covered_ip'?: Array<CoveredIPVO>;
    public constructor() { 
    }
    public withItems(items: Array<AddressItemIdWithoutName>): AddressItems {
        this['items'] = items;
        return this;
    }
    public withCoveredIp(coveredIp: Array<CoveredIPVO>): AddressItems {
        this['covered_ip'] = coveredIp;
        return this;
    }
    public set coveredIp(coveredIp: Array<CoveredIPVO>  | undefined) {
        this['covered_ip'] = coveredIp;
    }
    public get coveredIp(): Array<CoveredIPVO> | undefined {
        return this['covered_ip'];
    }
}