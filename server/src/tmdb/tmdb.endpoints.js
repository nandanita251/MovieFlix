import e from "express";
import tmdbConfig from "./tmdb.config";

const tmdbEndpoints = {
    MediaList:({mediaType, mediaCategory, page})=>tmdbConfig.getURL(
        `${mediaType}/${mediaCategory}`, {page}
    ),
    MediaDetails:({mediaType, mediaId})=>tmdbConfig.getURL(
        `${mediaType}/${mediaId}`
    ),
    MediaGenres:({mediaType})=>tmdbConfig.getURL(
        `genre/${mediaType}/list`
    ),
    MediaCredits:({mediaType, mediaId})=>tmdbConfig.getURL(
        `${mediaType}/${mediaId}/credits`
    ),
    MediaVideos:({mediaType, mediaId})=>tmdbConfig.getURL(
        `${mediaType}/${mediaId}/videos`
    ),
    MediaImages:({mediaType, mediaId})=>tmdbConfig.getURL(
        `${mediaType}/${mediaId}/images`
    ),
    MediaRecommend:({mediaType, mediaId})=>tmdbConfig.getURL(
        `${mediaType}/${mediaId}/recommend`
    ),
    MediaSearch:({mediaType, query, page})=>tmdbConfig.getURL(
        `search/${mediaType}`, {query, page}
    ),
    personDetails:({personId})=>tmdbConfig.getURL(
        `person/${personId}`
    ),
    personMedias:({personId, page})=>tmdbConfig.getURL(
        `person/${personId}/combined_credits`, {page}
    ),
};

export default tmdbEndpoints;