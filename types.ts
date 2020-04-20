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
export interface ISendMessageParams {
    chat_id: number | string;
    text: string;
    parse_mode?: string;
    disable_web_page_preview?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
}
export interface IForwardMessageParams {
    chat_id: number | string;
    from_chat_id: number | string;
    disable_notification?: boolean;
    message_id: number;
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
    update_id: number;
    message?: string;
    edited_message?: IMessage;
    channel_post?: IMessage;
    edited_channel_post?: IMessage;
    inline_query?: IInlineQuery;
    chosen_inline_result?: IChosenInlineResult;
    callback_query?: ICallbackQuery;
    shipping_query?: IShippingQuery;
    pre_checkout_query?: IPreCheckoutQuery;
    poll?: IPoll;
    poll_answer?: IPollAnswer;
}
export interface IChosenInlineResult {

}
export interface IShippingQuery {

}
export interface IPreCheckoutQuery {

}
export interface ISendPhotoParams {
    
}
export interface ISendAudioParams {
    
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
export interface IInlineQuery {

}