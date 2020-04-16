// request
export interface IResponse<T> {
    ok: boolean;
    description?: string;
    result?: T;
}
export interface IGetUpdatesParams {
    offset?: number;
    limit?: number;
    timeout?: number;
    allowed_updates?: string[];
}
export interface ISetWebhookParams {
    url: string;
    certificate?: IInputFile;
    max_connections?: number;
    allowed_updates?: string[];
}
export interface IWebhookInfo {
    url: string;
    has_custom_certificate: boolean;
    pending_update_count: number;
    last_error_date?: number;
    last_error_message?: string;
    max_connections?: number;
    allowed_updates?: string[];
}
export interface IUpdate {

}

// available types
export interface IUser {

}
export interface IChat {

}
export interface IMessage {

}
export interface IMessageEntity {

}
export interface IPhotoSize {

}
export interface IAudio {

}
export interface IDocument {

}
export interface IVideo {

}
export interface IAnimation {

}
export interface IVoice {

}
export interface IVoiceNote {

}
export interface IContact {

}
export interface ILocation {

}
export interface IVenue {

}
export interface IPollOption {

}
export interface IPollAnswer {

}
export interface IPoll {

}
export interface IDice {

}
export interface IUserProfilePhotos {

}
export interface IFile {

}
export interface IReplyKeyboardMarkup {

}
export interface IKeyboardButton {

}
export interface IKeyboardButtonPollType {

}
export interface IReplyKeyboardRemove {

}
export interface IInlineKeyboardMarkup {

}
export interface IInlineKeyboardButton {

}
export interface ILoginUrl {

}
export interface ICallbackQuery {

}
export interface IForceReply {

}
export interface IChatPhoto {

}
export interface IChatMember {

}
export interface IChatPermissions {

}
export interface IBotCommand {

}
export interface IResponseParameters {

}
export interface IInputMedia {

}
export interface IInputMediaPhoto {

}
export interface IInputMediaAnimation {

}
export interface IInputMediaAudio {

}
export interface IInputMediaDocument {

}
export interface IInputFile {

}

// stickers
export interface ISticker {

}
export interface IStickerSet  {

}
export interface IMaskPosition {

}

// inline mode
