import express from "express";
import { URLmodel } from "../models/shortURL";

// we have to define types in ts
export const createURL = async (req:express.Request, res:express.Response) => {
    try {
        console.log("Full URL is : ", req.body.fullURL);
        const {fullURL} = req.body;
        const URLfound = await URLmodel.find({fullURL});
        if(URLfound.length > 0)
        {
            res.status(409);
            res.send(URLfound);
        }else{
            const shortURL = await URLmodel.create({fullURL});
            res.status(201).send(shortURL);
        }
    } catch (error) {
        res.status(500).send({message: "Something went wrong"});
    }
};
export const getAllURL = async (req:express.Request, res:express.Response) => {
    try {
        const shortURLs = await URLmodel.find().sort({createdAt : -1});
        if(shortURLs.length <= 0)
        {
            res.status(404).send({message : "No url found"});
        }
        else{
            res.status(200).send(shortURLs);
        }
    } catch (error) {
        res.status(500).send({message : "Something went wrong"});
    }
};
export const getURL = async (req:express.Request, res:express.Response) => {
    try {
        const shortURL = await URLmodel.findOne({shortURL : req.params.id});
    if(!shortURL)
    {
        res.status(404).send({message : "Full url not found"});
    }
    else{
        shortURL.clicks++;
        shortURL.save();
        res.redirect(`${shortURL.fullURL}`);
    }
        
    } catch (error) {
        res.status(500).send({message : "Something went worng"});
    }
    
};
export const deleteURL = async (req:express.Request, res:express.Response) => {

    try {
        const shortURL = await URLmodel.findByIdAndDelete({_id : req.params.id});
    if(shortURL)
    {
        res.status(200).send({message : "Requested URL deleted successfuly"});
    }

        
    } catch (error) {
        res.status(500).send({message : "Something went worng"});
    }
};