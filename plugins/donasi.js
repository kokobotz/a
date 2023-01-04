let handler = async m => m.reply(`DANA 0853 9591 9734 ( ATAS NAMA *BIRA S* )
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler