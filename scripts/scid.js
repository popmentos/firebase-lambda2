const scid = [
  {
    SCID: 'A00b',
    desc: '"Barnes Opening"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR b KQkq - 0 1'
  },
  {
    SCID: 'A00b',
    desc: '"Fried fox"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/8/5P2/PPPPPKPP/RNBQ1BNR b kq - 1 2'
  },
  {
    SCID: 'A00c',
    desc: '"Kadas Opening"',
    fen: 'rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP1/RNBQKBNR b KQkq h3 0 1'
  },
  {
    SCID: 'A00d',
    desc: '"Clemenz Opening"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR b KQkq - 0 1'
  },
  {
    SCID: 'A00e',
    desc: '"Ware Opening"',
    fen: 'rnbqkbnr/pppppppp/8/8/P7/8/1PPPPPPP/RNBQKBNR b KQkq a3 0 1'
  },
  {
    SCID: 'A00f',
    desc: '"Anderssen Opening"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR b KQkq - 0 1'
  },
  {
    SCID: 'A00f',
    desc: '"Creepy Crawly Opening (Basman)"',
    fen: 'rnbqkbnr/ppp2ppp/8/3pp3/8/P6P/1PPPPPP1/RNBQKBNR w KQkq d6 0 3'
  },
  {
    SCID: 'A00g',
    desc: '"Amar/Paris Opening"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/7N/PPPPPPPP/RNBQKB1R b KQkq - 1 1'
  },
  {
    SCID: 'A00g',
    desc: '"Amar: Paris Gambit"',
    fen: 'rnbqkbnr/ppp2ppp/8/3pp3/5P2/6PN/PPPPP2P/RNBQKB1R b KQkq f3 0 3'
  },
  {
    SCID: 'A00h',
    desc: '"Durkin"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/N7/PPPPPPPP/R1BQKBNR b KQkq - 1 1'
  },
  {
    SCID: 'A00i',
    desc: '"Saragossa"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/2P5/PP1PPPPP/RNBQKBNR b KQkq - 0 1'
  },
  {
    SCID: 'A00j',
    desc: '"Mieses"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR b KQkq - 0 1'
  },
  {
    SCID: 'A00j',
    desc: '"Mieses: 1...e5"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPP1PPPP/RNBQKBNR w KQkq e6 0 2'
  },
  {
    SCID: 'A00j',
    desc: '"Mieses: 1...d5"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/8/3P4/PPP1PPPP/RNBQKBNR w KQkq d6 0 2'
  },
  {
    SCID: 'A00j',
    desc: '"Spike Deferred"',
    fen: 'rnbqkbnr/pppppp1p/6p1/8/6P1/3P4/PPP1PP1P/RNBQKBNR b KQkq g3 0 2'
  },
  {
    SCID: 'A00k',
    desc: '"Van Kruijs"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq - 0 1'
  },
  {
    SCID: 'A00l',
    desc: '"Van Geet (Dunst) Opening"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR b KQkq - 1 1'
  },
  {
    SCID: 'A00l',
    desc: '"Van Geet: 1...Nf6"',
    fen: 'rnbqkb1r/pppppppp/5n2/8/8/2N5/PPPPPPPP/R1BQKBNR w KQkq - 2 2'
  },
  {
    SCID: 'A00l',
    desc: '"Van Geet: 1...Nf6 2.Nf3"',
    fen: 'rnbqkb1r/pppppppp/5n2/8/8/2N2N2/PPPPPPPP/R1BQKB1R b KQkq - 3 2'
  },
  {
    SCID: 'A00l',
    desc: '"Van Geet: Tuebingen Gambit"',
    fen: 'rnbqkb1r/pppppppp/5n2/8/6P1/2N5/PPPPPP1P/R1BQKBNR b KQkq g3 0 2'
  },
  {
    SCID: 'A00l',
    desc: '"Van Geet: 1...e5"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/8/2N5/PPPPPPPP/R1BQKBNR w KQkq e6 0 2'
  },
  {
    SCID: 'A00l',
    desc: '"Van Geet: 1...e5 2.Nf3"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/8/2N2N2/PPPPPPPP/R1BQKB1R b KQkq - 1 2'
  },
  {
    SCID: 'A00l',
    desc: '"Van Geet: Sicilian Variation"',
    fen: 'rnbqkbnr/pp1ppppp/8/2p5/8/2N5/PPPPPPPP/R1BQKBNR w KQkq c6 0 2'
  },
  {
    SCID: 'A00l',
    desc: '"Van Geet: Sicilian Variation, 2.Nf3"',
    fen: 'rnbqkbnr/pp1ppppp/8/2p5/8/2N2N2/PPPPPPPP/R1BQKB1R b KQkq - 1 2'
  },
  {
    SCID: 'A00l',
    desc: '"Van Geet: Sicilian Variation, 2.Nf3 Nc6"',
    fen: 'r1bqkbnr/pp1ppppp/2n5/2p5/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq - 2 3'
  },
  {
    SCID: 'A00m',
    desc: '"Van Geet: 1...d5"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/8/2N5/PPPPPPPP/R1BQKBNR w KQkq d6 0 2'
  },
  {
    SCID: 'A00m',
    desc: '"Van Geet: 1...d5 2.Nf3"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/8/2N2N2/PPPPPPPP/R1BQKB1R b KQkq - 1 2'
  },
  {
    SCID: 'A00m',
    desc: '"Van Geet: 1...d5 2.Nf3 Nf6"',
    fen: 'rnbqkb1r/ppp1pppp/5n2/3p4/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq - 2 3'
  },
  {
    SCID: 'A00m',
    desc: '"Van Geet: 1...d5 2.e4"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq e3 0 2'
  },
  {
    SCID: 'A00m',
    desc: '"Van Geet: 1...d5 2.e4 d4"',
    fen: 'rnbqkbnr/ppp1pppp/8/8/3pP3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 3'
  },
  {
    SCID: 'A00m',
    desc: '"Van Geet: 1...d5 2.e4 dxe4"',
    fen: 'rnbqkbnr/ppp1pppp/8/8/4p3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 3'
  },
  {
    SCID: 'A00m',
    desc: '"Van Geet: Hector Gambit"',
    fen: 'rnbqkbnr/ppp1pppp/8/8/2B1p3/2N5/PPPP1PPP/R1BQK1NR b KQkq - 1 3'
  },
  {
    SCID: 'A00n',
    desc: '"Grob"',
    fen: 'rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq g3 0 1'
  },
  {
    SCID: 'A00n',
    desc: '"Grob: Alessi Gambit"',
    fen: 'rnbqkbnr/ppppp1pp/8/5p2/6P1/8/PPPPPP1P/RNBQKBNR w KQkq f6 0 2'
  },
  {
    SCID: 'A00n',
    desc: '"Grob: Double Grob"',
    fen: 'rnbqkbnr/pppppp1p/8/6p1/6P1/8/PPPPPP1P/RNBQKBNR w KQkq g6 0 2'
  },
  {
    SCID: 'A00n',
    desc: '"Grob: 1...e5"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/6P1/8/PPPPPP1P/RNBQKBNR w KQkq e6 0 2'
  },
  {
    SCID: 'A00o',
    desc: '"Grob: 1...d5"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/6P1/8/PPPPPP1P/RNBQKBNR w KQkq d6 0 2'
  },
  {
    SCID: 'A00o',
    desc: '"Grob Gambit"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/6P1/8/PPPPPPBP/RNBQK1NR b KQkq - 1 2'
  },
  {
    SCID: 'A00o',
    desc: '"Grob Gambit: e5"',
    fen: 'rnbqkbnr/ppp2ppp/8/3pp3/6P1/8/PPPPPPBP/RNBQK1NR w KQkq e6 0 3'
  },
  {
    SCID: 'A00o',
    desc: '"Grob Gambit: Hurst Attack"',
    fen: 'rnbqkbnr/ppp2ppp/8/3pp3/2P3P1/8/PP1PPPBP/RNBQK1NR b KQkq c3 0 3'
  },
  {
    SCID: 'A00o',
    desc: '"Grob Gambit: 2...c6"',
    fen: 'rnbqkbnr/pp2pppp/2p5/3p4/6P1/8/PPPPPPBP/RNBQK1NR w KQkq - 0 3'
  },
  {
    SCID: 'A00o',
    desc: '"Grob Gambit: Spike Attack"',
    fen: 'rnbqkbnr/pp2pppp/2p5/3p2P1/8/8/PPPPPPBP/RNBQK1NR b KQkq - 0 3'
  },
  {
    SCID: 'A00o',
    desc: '"Grob Gambit Accepted"',
    fen: 'rn1qkbnr/ppp1pppp/8/3p4/6b1/8/PPPPPPBP/RNBQK1NR w KQkq - 0 3'
  },
  {
    SCID: 'A00o',
    desc: '"Grob Gambit Accepted: Fritz Gambit"',
    fen: 'rn1qkbnr/ppp1pppp/8/3p4/2P3b1/8/PP1PPPBP/RNBQK1NR b KQkq c3 0 3'
  },
  {
    SCID: 'A00p',
    desc: '"Polish (Sokolsky; Orang-Utan)"',
    fen: 'rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq b3 0 1'
  },
  {
    SCID: 'A00p',
    desc: '"Polish: Birmingham Gambit"',
    fen: 'rnbqkbnr/pp1ppppp/8/2p5/1P6/8/P1PPPPPP/RNBQKBNR w KQkq c6 0 2'
  },
  {
    SCID: 'A00p',
    desc: '"Polish: 1...Nf6"',
    fen: 'rnbqkb1r/pppppppp/5n2/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 1 2'
  },
  {
    SCID: 'A00p',
    desc: '"Polish: 1...Nf6 2.Bb2"',
    fen: 'rnbqkb1r/pppppppp/5n2/8/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 2 2'
  },
  {
    SCID: 'A00p',
    desc: '"Polish: 1...Nf6 2.Bb2 e6"',
    fen: 'rnbqkb1r/pppp1ppp/4pn2/8/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3'
  },
  {
    SCID: 'A00p',
    desc: '"Polish: 1...c6"',
    fen: 'rnbqkbnr/pp1ppppp/2p5/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 2'
  },
  {
    SCID: 'A00p',
    desc: '"Polish: Schuehler Gambit"',
    fen: 'rnbqkbnr/1p1ppppp/2p5/pP6/8/8/PBPPPPPP/RN1QKBNR b KQkq - 0 3'
  },
  {
    SCID: 'A00q',
    desc: '"Polish: 1...d5"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/1P6/8/P1PPPPPP/RNBQKBNR w KQkq d6 0 2'
  },
  {
    SCID: 'A00q',
    desc: '"Polish: 1...d5 2.Bb2"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 1 2'
  },
  {
    SCID: 'A00q',
    desc: '"Polish: 1...d5 2.Bb2 Bf5"',
    fen: 'rn1qkbnr/ppp1pppp/8/3p1b2/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 2 3'
  },
  {
    SCID: 'A00q',
    desc: '"Polish: 1...d5 2.Bb2 Nf6"',
    fen: 'rnbqkb1r/ppp1pppp/5n2/3p4/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 2 3'
  },
  {
    SCID: 'A00q',
    desc: '"Polish: 1...d5 2.Bb2 Nf6 3.e3"',
    fen: 'rnbqkb1r/ppp1pppp/5n2/3p4/1P6/4P3/PBPP1PPP/RN1QKBNR b KQkq - 0 3'
  },
  {
    SCID: 'A00r',
    desc: '"Polish: 1...e5"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/1P6/8/P1PPPPPP/RNBQKBNR w KQkq e6 0 2'
  },
  {
    SCID: 'A00r',
    desc: '"Polish: Bugayev Attack"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/1P6/P7/2PPPPPP/RNBQKBNR b KQkq - 0 2'
  },
  {
    SCID: 'A00r',
    desc: '"Polish: 1...e5 2.Bb2"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 1 2'
  },
  {
    SCID: 'A00r',
    desc: '"Polish: Wolfertz Gambit"',
    fen: 'rnbqkbnr/pp1p1ppp/8/2p1p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq c6 0 3'
  },
  {
    SCID: 'A00r',
    desc: '"Polish: 1...e5 2.Bb2 f6"',
    fen: 'rnbqkbnr/pppp2pp/5p2/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3'
  },
  {
    SCID: 'A00r',
    desc: '"Polish: Tartakower Gambit"',
    fen: 'rnbqk1nr/pppp2pp/5p2/4p3/1b2P3/8/PBPP1PPP/RN1QKBNR w KQkq - 0 4'
  },
  {
    SCID: 'A00r',
    desc: '"Polish: 1...e5 2.Bb2 d6"',
    fen: 'rnbqkbnr/ppp2ppp/3p4/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3'
  },
  {
    SCID: 'A00s',
    desc: '"Polish: 2...Bxb4"',
    fen: 'rnbqk1nr/pppp1ppp/8/4p3/1b6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3'
  },
  {
    SCID: 'A00s',
    desc: '"Polish: 2...Bxb4 3.Bxe5"',
    fen: 'rnbqk1nr/pppp1ppp/8/4B3/1b6/8/P1PPPPPP/RN1QKBNR b KQkq - 0 3'
  },
  {
    SCID: 'A00s',
    desc: '"Polish: 2...Bxb4 3.Bxe5 Nf6"',
    fen: 'rnbqk2r/pppp1ppp/5n2/4B3/1b6/8/P1PPPPPP/RN1QKBNR w KQkq - 1 4'
  },
  {
    SCID: 'A00s',
    desc: '"Polish: 2...Bxb4 3.Bxe5 Nf6 4.c4"',
    fen: 'rnbqk2r/pppp1ppp/5n2/4B3/1bP5/8/P2PPPPP/RN1QKBNR b KQkq c3 0 4'
  },
  {
    SCID: 'A00s',
    desc: '"Polish: 2...Bxb4 3.Bxe5 Nf6 4.Nf3"',
    fen: 'rnbqk2r/pppp1ppp/5n2/4B3/1b6/5N2/P1PPPPPP/RN1QKB1R b KQkq - 2 4'
  },
  {
    SCID: 'A00t',
    desc: '"Benko Opening"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq - 0 1'
  },
  {
    SCID: 'A00t',
    desc: '"Benko Opening"',
    fen: 'rnbqkb1r/pppppppp/5n2/8/8/6P1/PPPPPP1P/RNBQKBNR w KQkq - 1 2'
  },
  {
    SCID: 'A00t',
    desc: '"Benko Opening: Symmetrical"',
    fen: 'rnbqkbnr/pppppp1p/6p1/8/8/6P1/PPPPPP1P/RNBQKBNR w KQkq - 0 2'
  },
  {
    SCID: 'A00u',
    desc: '"Benko Opening"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/8/6P1/PPPPPP1P/RNBQKBNR w KQkq e6 0 2'
  },
  {
    SCID: 'A00v',
    desc: '"Benko Opening"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/8/6P1/PPPPPP1P/RNBQKBNR w KQkq d6 0 2'
  },
  {
    SCID: 'A00v',
    desc: '"Benko Opening"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/8/6P1/PPPPPPBP/RNBQK1NR b KQkq - 1 2'
  },
  {
    SCID: 'A00v',
    desc: '"Benko Opening"',
    fen: 'rnbqkbnr/pp2pppp/2p5/3p4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq - 0 3'
  },
  {
    SCID: 'A00v',
    desc: '"Benko Opening"',
    fen: 'rnbqkbnr/ppp2ppp/8/3pp3/8/6P1/PPPPPPBP/RNBQK1NR w KQkq e6 0 3'
  },
  {
    SCID: 'A00v',
    desc: '"Benko Opening"',
    fen: 'rnbqkb1r/ppp1pppp/5n2/3p4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq - 2 3'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen Attack"',
    fen: 'rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq - 0 1'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: Polish Variation"',
    fen: 'rnbqkbnr/p1pppppp/8/1p6/8/1P6/P1PPPPPP/RNBQKBNR w KQkq b6 0 2'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: Symmetrical"',
    fen: 'rnbqkbnr/p1pppppp/1p6/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 0 2'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: Dutch Variation"',
    fen: 'rnbqkbnr/ppppp1pp/8/5p2/8/1P6/P1PPPPPP/RNBQKBNR w KQkq f6 0 2'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: Ringelbach Gambit"',
    fen: 'rnbqkbnr/pppp2pp/4p3/5p2/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq e3 0 3'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: English Variation"',
    fen: 'rnbqkbnr/pp1ppppp/8/2p5/8/1P6/P1PPPPPP/RNBQKBNR w KQkq c6 0 2'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: Indian Variation"',
    fen: 'rnbqkb1r/pppppppp/5n2/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 1 2'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: Indian Variation"',
    fen: 'rnbqkb1r/pppppp1p/5np1/8/8/1P6/PBPPPPPP/RN1QKBNR w KQkq - 0 3'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: Spike Variation"',
    fen: 'rnbqkb1r/pppppp1p/5np1/8/6P1/1P6/PBPPPP1P/RN1QKBNR b KQkq g3 0 3'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: 1...d5"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/8/1P6/P1PPPPPP/RNBQKBNR w KQkq d6 0 2'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: 1...d5 2.Bb2"',
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/8/1P6/PBPPPPPP/RN1QKBNR b KQkq - 1 2'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: 1...e5"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/8/1P6/P1PPPPPP/RNBQKBNR w KQkq e6 0 2'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: 1...e5 2.Bb2"',
    fen: 'rnbqkbnr/pppp1ppp/8/4p3/8/1P6/PBPPPPPP/RN1QKBNR b KQkq - 1 2'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: 1...e5 2.Bb2 d6"',
    fen: 'rnbqkbnr/ppp2ppp/3p4/4p3/8/1P6/PBPPPPPP/RN1QKBNR w KQkq - 0 3'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: 1...e5 2.Bb2 Nc6"',
    fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/8/1P6/PBPPPPPP/RN1QKBNR w KQkq - 2 3'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: Paschmann Gambit"',
    fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/5P2/1P6/PBPPP1PP/RN1QKBNR b KQkq f3 0 3'
  },
  {
    SCID: 'A01',
    desc: '"Nimzowitsch-Larsen: 1...e5 2.Bb2 Nc6 3.e3"',
    fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/8/1P2P3/PBPP1PPP/RN1QKBNR b KQkq - 0 3'
  },
  {
    SCID: 'A02',
    desc: '"Bird"',
    fen: 'rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq f3 0 1'
  },
  {
    SCID: 'A02',
    desc: '"Bird: Hobbs Gambit"',
    fen: 'rnbqkbnr/pppppp1p/8/6p1/5P2/8/PPPPP1PP/RNBQKBNR w KQkq g6 0 2'
  },
  {
    SCID: 'A02',
    desc: '"Bird: Symmetrical"',
    fen: 'rnbqkbnr/ppppp1pp/8/5p2/5P2/8/PPPPP1PP/RNBQKBNR w KQkq f6 0 2'
  },
  {
    SCID: 'A02',
    desc: '"Bird: Swiss Gambit"',
    fen: 'rnbqkbnr/ppppp1pp/8/5p2/4PP2/8/PPPP2PP/RNBQKBNR b KQkq e3 0 2'
  },
  {
    SCID: 'A02',
    desc: '"Bird: Swiss Gambit"',
    fen: 'rnbqkb1r/ppppp1pp/5n2/8/4pPP1/2N5/PPPP3P/R1BQKBNR b KQkq g3 0 4'
  },
  {
    SCID: 'A02',
    desc: '"Bird: 1..d6"',
    fen: 'rnbqkbnr/ppp1pppp/3p4/8/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 2'
  },
  ... 10259 more items
]

export default scid;