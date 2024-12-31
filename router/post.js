const express = require('express');
const router = express.Router();

const postData = [
    {
        judul: 'satu',
        konten: 'lorem ipsum dolor sit amet tempor invid'
    },
    {
        judul: 'salto',
        konten: 'lorem ipsum dolor sit amet tempor invid'
    },
    {
        judul: 'dua',
        konten: 'lorem ipsum dolor sit amet tempor invid'
    },
    {
        judul: 'tiga',
        konten: 'lorem ipsum dolor sit amet tempor invid'
    },
];

// Endpoint untuk mendapatkan semua post
router.get('/post', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: postData
    });
});

// Endpoint untuk mendapatkan post berdasarkan judul menggunakan query parameter
router.get('/post/search', (req, res) => {
    const { juduls } = req.query;
    //
    console.log(juduls);
    if (!juduls) {
        return res.status(400).json({
            status: 'failed',
            message: 'Query parameter "judul" is required'
        });
    }

    const hasilCari = postData.filter(post => 
        post.judul.includes(juduls)
    );
    
    console.log(hasilCari);

    if (hasilCari.length === 0) {
        return res.status(404).json({
            status: 'failed',
            message: 'Post not found'
        });
    }

    res.status(200).json({
        status: 'success',
        data: hasilCari
    });
});

module.exports = router;
