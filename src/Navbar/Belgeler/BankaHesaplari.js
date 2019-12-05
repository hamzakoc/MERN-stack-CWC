import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';

export default class BankaHesaplari extends Component {
    render() {
        return (
            <div>
                <br></br><br></br>
                <Container>
                    <Col>
                    <h1>BANKA İŞLEMLERİ</h1>
                    <p> 
                        Kanada’ya geldikten sonra  Yardım ve hayati işlemlerin kolaylaşması için en kısa sürede 
                        hesap açtırmanız önemlidir. Genelde en çok etrcih edilen bankalar aşağıdaki gibidir. Ayrıca banka 
                        hesabı açtırmak Kanada’da ilk yıllarda büyük önem taşıyan <a href="https://en.wikipedia.org/wiki/Credit_history" target="_blank">
                        kredi history</a> oluşturmak için de en güzel 
                        yoldur. Hesap açtığınız bankadan kredi kartıda talep ederek ve ödemelerinizi aksatmadan düzenli
                         olarak yaparak kısa sürede iyi bir kredi geçmişi oluşturabilir.
                         <br></br><br></br>
                        Kanada bankalarında hesaplar Saving (Mevduat Hesabı) Account ve Chequing ( Normal Hesap) Accountolarak ikiye ayrılır.
                        ATM lerden veya banka şubelerinden günlük para çekmek limitlidir. Size verilen hesap kartını her alışverişinizde kullanabilirsiniz.

                        Saving hesapları ile para biriktirip kredi skoru oluşturabilirsiniz. Saving hesabınıza para 
                        yatırıp arada o hesaba eklemeler yaparak kısa süre içinde kredi skoru oluşturabilirsiniz.
                        <br></br><br></br>

                        Bankaların çoğu ilk etapta orada  yeni olduğunuz için  sizlere kredi kartı vermeyebilir. Bunu aşmak için ön ödemeli 
                        yani Prepaid kredi kartları  almaktır. Örneğin 500 dolar ödeyerek  500 dolarlık bir kredi kartı alabilirsiniz. 
                        <br></br><br></br>            
                        Hesap bilgileri (direct deposit) formu welfare tarafından
                         istenmektedir.Sosyal Yardımın en hızlı şekilde size ulasmasına yardımcı
                        olacaktır. Banka hesabi actirilabilecek bankalar RBC,TD,CIBC vb…</p>
                        
                            <a style={{marginLeft:20,}} href="https://www.rbcroyalbank.com" target="_blank">
                                <img src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/logos/rbc-logo-shield.svg" 
                                width="100" height="100"></img></a>

                            <a href="https://www.td.com/ca/en/personal-banking/" target="_blank">
                                <img style={{marginLeft:20,}} src="https://www.td.com/ca/en/personal-banking/system/v1.5/assets/img/header-nav/td-logo.png" 
                                width="100" height="100"></img></a>

                            <a href="https://www.cibc.com/en/personal-banking/ways-to-bank/online-services.html" target="_blank">
                                <img style={{marginLeft:30,}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACKCAMAAACQCSgOAAAAt1BMVEWwCxz/1AH/////1ACuABysAAD/1gDRhor/3AD/2QCsAB3/4gCzFhuoAB2wABvZgRHLXBXxuAikAB6nAADlmgyvABbGVhbLbRauAA7+zwDUdhL1wAb67/D9+fm1HxrdiA+/OxfQaxPsrAq6Ohq6MRnhkQ75yATv19nqognBSRjJZRbPZRO6JBj04uO6Mz7mvcDLcXfFY2mzISi1MTTASlTbo6Xsy87UlZa+VFy6S0zgsLO4PULLeX1S7JE1AAAMRElEQVR4nO1cDVeiTBSGZRyZEUUKTaAVRCBYLdO2dKv//7veOx+gIH5ttnXe421Px4i5Pj73mTv3ztAqze9pSuN7mnKxi13sYhe72MX+F4Zou33VYXbVbrcpQvwqhRdro5RfqlyDgWIE2umbOW/nzindfefWQCO7iS1H1TBWVS/1R9nUgNGoa97c3PzqM4MXrjlUaN904eVNFy51+TUztm07NkfBsP79EBoy56rGDIPzmyxSjoGGaORbjq4TLI3ouuOFboBQ2NLhusoMXrRaAaI2u6TrgF/F+oYRxxp1tt8N0cCUzjX4ks5Tc3wIGEL9EOuMJ0wI/INv7C0xaZkUxQ77Bfuo8J04SYSoLy7xa5q4X+PAMda9DO1xTjad+/QArMhWCXtbDB849X0/DhP2Tpqqd5EyHHcTrGr8C8fjqKOg4XjiYXFF0zwrDC0HE/kz8YISMBrZmAj8Tpj6pmnnzvHNfly0n8iQeG7UoUzFaDjyCAPDPjxqTzg7cIcl9YPoRBeXSGx0EOpE/ZDIm4jV2XTeTXQtd85mCEg+AucAy6kyW2HLVQV8xzUKKcIs8IFrCBr7IXM0zoVu52+Jei3JoEvF/WiEBauqPkIbzhlc4ZxuOgedJcN9uKjLyYKRfbp5H6IhZvywl5EnuNDjggraEuxoozwYNCaSsLDwg0whRLLtnOBkH1vUxZKtoBJt5BNsGfylYQk16WbhvC340tRuPgwNE36Xir0I5c65GFScZFXnNtmAXwMrcOTMGlVFCCEgqZLjEnxt4hKKW+NSaCoIw45MABB/4ZxMtpybmKS7caGhJTOTvTU30IQQGbfjcCEznwtC0MiQzond3nI+AlHsxgVEa1yWONq6CfVJjmN3HEt8ubqIYyL4QiNd3OME2867mx9y67dGguVs304lKGu13ALXMXG80YtswsYPvdx5zRLQx5Czd+GiJmEfED51v2bo0HWDU/iCOHK+iM3vgliITEJq8hSaFs7rLBeAZdTdQ/O5fSRfIlFoEgeVg7BX5xtRujuMbDIyvsi26kt2Up4gqci0Y03kWXzA+baBUOUE2prHW7gO88XixnzJ7IVucudbGeiQQXLjgtD0PaGWuA7qiwrySSLzc0c4B0ZrtHsAl5wwRSLcg2sXXw7DxYrRiQd04VaYLxv5GLnGngJr6OTK3LuC7sOlqqNhx4gyl5UTRPdMJGEVayr2jNNgcdmLRGgdGLo7jkCH53mJAxWVplrucJ008hoEe516p7txZTlfR+DayZcou3lI4wnU2GiNS/J1Mq6uqolEuG9ll7h28QXluugJ2CsM9b2UBKxi8vfeydPxV1GGfoCveOSOXD+UJS/WkxEvLlFf3vAXfPXVD+uLzUfWQiqRmRDJX6qw4jvD6sf19dfzschf0OjJRQ3rqfIxfRXz8VCKOWrdZplBpmmo+XPnUMZPT81fU1nlaPjv8+rmut3Nu0jIh+v8daDtqTOJS9UPDD0Ol4KsvFWboGKMin+dvA6lcn0k7t/WEyVc1BflnKjAUtnpHnJeg6soyNMz1BOsYJWBJCFrW450vm0gCFF/HZqQR/KFApZ4GEUh6+J1uVKdPiHzClzF+2uR3XxpJVyRs+ZL6eTqJdXm8TAwOxfEnp5JOZ6vyFnzpbRTuRLta8jqjfaJnNlObYG/geuo+SibZJW3rNDySOcnV2DQG4j+UdP37kUdOx/7qqSf93cdS87I/c5rcU1wXlXuK6WPnY9uvhHA8yHt6nk0TiYMqnApTqtmA/JEXEhuUOR1U/4zXNgrkxpjUpXq9Hc3dEfuA8i2D+N8LQ/kDo8G/fyJwGjXyaezbWztuqAT9gEQSkUmXc8/EFzhfLjL+Q5DIyL7TxJmm9vqMC5KxbsWfMW7+ULUFX7IRheDXE1kDq3qnKLA7u4FRl0nlwG2M4NKQ9OurbX42obGicyX631MQ+ZVWRdSGsUi5xBvc4MPueraeb9w3hlOmPP9saWZR0Shj4lqpfGo23XZrjEmhK1P0Bu6Re0Z8PMOgGHKVUY1x9FwHEzihGdRTKxpKWCo7+miMdIItlI/d07Ijk2RzbFsK1vmC7aBz88VoPPCLbaDG4zsXIKw1vldA/TcTYtLmpN4jsrHQ3WPzeqb0WnhXJPO+X4/1g/vDyA6thNdkCYmEPOBPSZzFOtsux3DkszOUIjOzzuYJtmPmjjAEL9RPXO6Pe8QDWxHFxut+RtozPkhVHywEpgWO0kRxl6lI14Ao7ill2x9DlMyNTT7u06HOoG76Ry+0l/HplpEr1Bm+uwAyo790fSqLT/6dNjpXElrdzpTiOM04udizBBciaKoR6/ae87IQKPMuS2dR+320edpzNjxG3vH0qZZxQPausTP+v7S+cUudrEvNyRPIjsd49TdxLMjYau7gNOmvSjrun4c22l48m71ufBwXoxhNM76IzOOUygI8uWCJf/dpzGfA4elT6oAnv7Ij9PUShKHPTzA1my2xKtsXf2HuAQ/yJhmDI6VsOKJoZG7sKKc0PkDBIkVpnZ8+m7PyZDYAsP4MeMwEU8lsFIDizKCs6M6Dkfju/0gioy9p0RnAIRkgWvGKdszF/TkJRsnCMwLbXOSBdFQ4c8cILZa9sA+BxPUxEYUACJLJYKhjSqO1YGq44VQAweGUjzPA8MG7Bnf3uLp7ffDmYExZbevOhnnSNX1/JGTouzVW60EKOpmkYHkc0LADgC6vr5uPMybz6+zl/vb2+UZH0GGRGQMg19m6uhC0xuQOEkOQxQgGS82hBGkPL2tHpvPs7sfG/Z8Hlyi9xn5QBLWCV6XxlzajKYkjEfZmLU+7H7OUKMxeHhcPs/u729//qjYGfgCRAZnCaY+KYQtI8doA5YmESqiBogGC4jYcnb7o4rn5/3LbLacPyw+KC8WuuDGthzMIRU9hOjAgDgrdTP2dA+PGoNkLH6/L1+rDP28BUDPj6s/Tz3O4wdgMQJA33YCatpUUq5wHVv2JGCBy1lq9FbN17tqzO5nr8vH329U4PkYT4ymqA+hU0mJpqKXcwBTVOw1DEDbq+ZzBdLP27uX5/nbgsX1o4AET+1O1w89dUtNgqeWZ7vBUNDUgbBcN+bL2X0lbnevzfkf9lcS58mgiHamfdPCMlOWaGJEqV4I/aXMkj3QN4jp/keVpeaDMfh40ApMQNT0xuY8qVsG3X7Li7sRKiR+vXiE0JVBvbw+/ll8TNcVUIwoP8E1sWMbbASSgTtFMhM0Gou3xypP9y/L3x0G6dR9+32g6PSX7fHHFLWqylkm91iCkkSBZObLCk+AafV0Tpp49KBXD+uSgcyblh8o62Tw1pyVMd0CprOGjqOiw8y0nJpkIA5hHcvPjGKtW8ybZaJg2s3fBufGhNq073tOLVG84LTMrJNHD7LB612ZqFnzDxB49oJl2I8TcaRfoYlXB5pnB/mDmo3ew/y1TNT98+/FYHBeong+z3wL6zX5gKeElpNOpnlCuB68v5bm3s/ZcqU0BuebdxIUUjIzUUleYlaTJ1bDUaGpwaLC1O3LO1P5mTExqoxRqO7QFIiqlcR9WR6AeFbPZU3dNf+cXVHMKOqKXc8dqJy0Wyh9sHoua+ql+fQpoNiThbD04drwqXzHdyweTILk+dB8KS3F98+rweeAUthxxY74QU+Mw658lnlw3XuvgHqdfxJTElf+WHqFL4y9eKzIxU9ZVXLCy+ppcH6hl3HVUKVBAnWHudQXzYrSl29nzue1uLb4gpoq7BuyY1B+P1eSwmrx6aAkroqsnDSTrVVj8FiV+j+gqsC1KSuSxFGeFp6a5aT+Mu98ptS3cG1wVaAaNB6WlaVm9akTcDcuQGWKvABF5nxWDuDy6R+CUjbiCJndjcQSCF1fRVbNz04LtbgEV27B1WMlL7z/ywAWuFRehZpTmRgW83L3cPe4+Iq/QQe+IDPEU8mV8r7N1bmrquNw6cSx5RwEVFWulK/6e/22Ho4lqqqu7pufVy4cNNTP89X7SwVV70v/bwOJajUrobr91/mqznqNPxVUz4uvR6UMlGW5X355+zdr835UjeoknH9Cb3M6rIqwfja/JI1u2XUJ1Y/ZwzcQFrMSrrvVN0FVxrX8HiHktsb18vZtyFLWuG6bvW8wC9cmcc0WX1M27LRrkRy+F1mKwHX39n30nts1m4bfjSyw6/v37zQNC+s9fb8YcvuOZF3sYhe72MXOZ/8BJsEZ+MF13eMAAAAASUVORK5CYII=" 
                                width="100" height="100"></img></a>
                    
                    </Col>
                </Container>
            </div>
        )
    }
}
