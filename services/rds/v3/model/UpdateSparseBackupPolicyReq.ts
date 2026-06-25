import { SparseBackupPolicyForUpdate } from './SparseBackupPolicyForUpdate';


export class UpdateSparseBackupPolicyReq {
    public policies?: Array<SparseBackupPolicyForUpdate>;
    public constructor(policies?: Array<SparseBackupPolicyForUpdate>) { 
        this['policies'] = policies;
    }
    public withPolicies(policies: Array<SparseBackupPolicyForUpdate>): UpdateSparseBackupPolicyReq {
        this['policies'] = policies;
        return this;
    }
}