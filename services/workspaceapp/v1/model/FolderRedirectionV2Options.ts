import { AppDataRoamingConfigurations } from './AppDataRoamingConfigurations';
import { ContactsConfigurations } from './ContactsConfigurations';
import { DesktopConfigurations } from './DesktopConfigurations';
import { DocumentsConfigurations } from './DocumentsConfigurations';
import { DownloadsConfigurations } from './DownloadsConfigurations';
import { FavoritesConfigurations } from './FavoritesConfigurations';
import { LinksConfigurations } from './LinksConfigurations';
import { MusicConfigurations } from './MusicConfigurations';
import { PicturesConfigurations } from './PicturesConfigurations';
import { SavedGamesConfigurations } from './SavedGamesConfigurations';
import { SearchesConfigurations } from './SearchesConfigurations';
import { StartMenuConfigurations } from './StartMenuConfigurations';
import { VideosConfigurations } from './VideosConfigurations';


export class FolderRedirectionV2Options {
    private 'app_data_roaming_configurations'?: AppDataRoamingConfigurations;
    private 'desktop_configurations'?: DesktopConfigurations;
    private 'start_menu_configurations'?: StartMenuConfigurations;
    private 'documents_configurations'?: DocumentsConfigurations;
    private 'pictures_configurations'?: PicturesConfigurations;
    private 'music_configurations'?: MusicConfigurations;
    private 'videos_configurations'?: VideosConfigurations;
    private 'favorites_configurations'?: FavoritesConfigurations;
    private 'contacts_configurations'?: ContactsConfigurations;
    private 'downloads_configurations'?: DownloadsConfigurations;
    private 'links_configurations'?: LinksConfigurations;
    private 'searches_configurations'?: SearchesConfigurations;
    private 'saved_games_configurations'?: SavedGamesConfigurations;
    public constructor() { 
    }
    public withAppDataRoamingConfigurations(appDataRoamingConfigurations: AppDataRoamingConfigurations): FolderRedirectionV2Options {
        this['app_data_roaming_configurations'] = appDataRoamingConfigurations;
        return this;
    }
    public set appDataRoamingConfigurations(appDataRoamingConfigurations: AppDataRoamingConfigurations  | undefined) {
        this['app_data_roaming_configurations'] = appDataRoamingConfigurations;
    }
    public get appDataRoamingConfigurations(): AppDataRoamingConfigurations | undefined {
        return this['app_data_roaming_configurations'];
    }
    public withDesktopConfigurations(desktopConfigurations: DesktopConfigurations): FolderRedirectionV2Options {
        this['desktop_configurations'] = desktopConfigurations;
        return this;
    }
    public set desktopConfigurations(desktopConfigurations: DesktopConfigurations  | undefined) {
        this['desktop_configurations'] = desktopConfigurations;
    }
    public get desktopConfigurations(): DesktopConfigurations | undefined {
        return this['desktop_configurations'];
    }
    public withStartMenuConfigurations(startMenuConfigurations: StartMenuConfigurations): FolderRedirectionV2Options {
        this['start_menu_configurations'] = startMenuConfigurations;
        return this;
    }
    public set startMenuConfigurations(startMenuConfigurations: StartMenuConfigurations  | undefined) {
        this['start_menu_configurations'] = startMenuConfigurations;
    }
    public get startMenuConfigurations(): StartMenuConfigurations | undefined {
        return this['start_menu_configurations'];
    }
    public withDocumentsConfigurations(documentsConfigurations: DocumentsConfigurations): FolderRedirectionV2Options {
        this['documents_configurations'] = documentsConfigurations;
        return this;
    }
    public set documentsConfigurations(documentsConfigurations: DocumentsConfigurations  | undefined) {
        this['documents_configurations'] = documentsConfigurations;
    }
    public get documentsConfigurations(): DocumentsConfigurations | undefined {
        return this['documents_configurations'];
    }
    public withPicturesConfigurations(picturesConfigurations: PicturesConfigurations): FolderRedirectionV2Options {
        this['pictures_configurations'] = picturesConfigurations;
        return this;
    }
    public set picturesConfigurations(picturesConfigurations: PicturesConfigurations  | undefined) {
        this['pictures_configurations'] = picturesConfigurations;
    }
    public get picturesConfigurations(): PicturesConfigurations | undefined {
        return this['pictures_configurations'];
    }
    public withMusicConfigurations(musicConfigurations: MusicConfigurations): FolderRedirectionV2Options {
        this['music_configurations'] = musicConfigurations;
        return this;
    }
    public set musicConfigurations(musicConfigurations: MusicConfigurations  | undefined) {
        this['music_configurations'] = musicConfigurations;
    }
    public get musicConfigurations(): MusicConfigurations | undefined {
        return this['music_configurations'];
    }
    public withVideosConfigurations(videosConfigurations: VideosConfigurations): FolderRedirectionV2Options {
        this['videos_configurations'] = videosConfigurations;
        return this;
    }
    public set videosConfigurations(videosConfigurations: VideosConfigurations  | undefined) {
        this['videos_configurations'] = videosConfigurations;
    }
    public get videosConfigurations(): VideosConfigurations | undefined {
        return this['videos_configurations'];
    }
    public withFavoritesConfigurations(favoritesConfigurations: FavoritesConfigurations): FolderRedirectionV2Options {
        this['favorites_configurations'] = favoritesConfigurations;
        return this;
    }
    public set favoritesConfigurations(favoritesConfigurations: FavoritesConfigurations  | undefined) {
        this['favorites_configurations'] = favoritesConfigurations;
    }
    public get favoritesConfigurations(): FavoritesConfigurations | undefined {
        return this['favorites_configurations'];
    }
    public withContactsConfigurations(contactsConfigurations: ContactsConfigurations): FolderRedirectionV2Options {
        this['contacts_configurations'] = contactsConfigurations;
        return this;
    }
    public set contactsConfigurations(contactsConfigurations: ContactsConfigurations  | undefined) {
        this['contacts_configurations'] = contactsConfigurations;
    }
    public get contactsConfigurations(): ContactsConfigurations | undefined {
        return this['contacts_configurations'];
    }
    public withDownloadsConfigurations(downloadsConfigurations: DownloadsConfigurations): FolderRedirectionV2Options {
        this['downloads_configurations'] = downloadsConfigurations;
        return this;
    }
    public set downloadsConfigurations(downloadsConfigurations: DownloadsConfigurations  | undefined) {
        this['downloads_configurations'] = downloadsConfigurations;
    }
    public get downloadsConfigurations(): DownloadsConfigurations | undefined {
        return this['downloads_configurations'];
    }
    public withLinksConfigurations(linksConfigurations: LinksConfigurations): FolderRedirectionV2Options {
        this['links_configurations'] = linksConfigurations;
        return this;
    }
    public set linksConfigurations(linksConfigurations: LinksConfigurations  | undefined) {
        this['links_configurations'] = linksConfigurations;
    }
    public get linksConfigurations(): LinksConfigurations | undefined {
        return this['links_configurations'];
    }
    public withSearchesConfigurations(searchesConfigurations: SearchesConfigurations): FolderRedirectionV2Options {
        this['searches_configurations'] = searchesConfigurations;
        return this;
    }
    public set searchesConfigurations(searchesConfigurations: SearchesConfigurations  | undefined) {
        this['searches_configurations'] = searchesConfigurations;
    }
    public get searchesConfigurations(): SearchesConfigurations | undefined {
        return this['searches_configurations'];
    }
    public withSavedGamesConfigurations(savedGamesConfigurations: SavedGamesConfigurations): FolderRedirectionV2Options {
        this['saved_games_configurations'] = savedGamesConfigurations;
        return this;
    }
    public set savedGamesConfigurations(savedGamesConfigurations: SavedGamesConfigurations  | undefined) {
        this['saved_games_configurations'] = savedGamesConfigurations;
    }
    public get savedGamesConfigurations(): SavedGamesConfigurations | undefined {
        return this['saved_games_configurations'];
    }
}