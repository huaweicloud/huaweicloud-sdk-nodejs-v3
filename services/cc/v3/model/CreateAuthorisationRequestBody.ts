import { CreateAuthorisation } from './CreateAuthorisation';


export class CreateAuthorisationRequestBody {
    public authorisation?: CreateAuthorisation;
    public constructor(authorisation?: CreateAuthorisation) { 
        this['authorisation'] = authorisation;
    }
    public withAuthorisation(authorisation: CreateAuthorisation): CreateAuthorisationRequestBody {
        this['authorisation'] = authorisation;
        return this;
    }
}