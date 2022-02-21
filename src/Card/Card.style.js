import styled from 'styled-components';


export const StyledCard = styled.div`
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 500ms ease;

    :hover{
        transform: scale(1.05);
    }
    

    & .top-card{
        position: relative;
        height: 240px;

        .images-container{
            height: inherit;

            img {
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                height: inherit;
            }
        }

        .tag{
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: #E5E5E5;
            color: #000000;
            padding: 8px 13px;
            border-radius: 30px;
        }
    }

    & .main-card{

        .rental-space{
            font-size: 13px;
            margin-bottom: 10px;
        }

        .title{
            font-size: 18px;
            font-weight: bold;
            color: #000000;
            margin-bottom: 20px;
        }

        .general-infos{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            column-gap: 10px;
            margin-bottom: 20px;

            .info-box{

                .number{
                    font-size: 20px;
                    font-weight: 600;
                    color: #000000;
                    margin-right: 5px;
                }

                .label{
                    font-size: 13px;
                }
            }
        }

        .description{
            font-size: 14px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }
    }

    & .bottom-card{

        border-top: 1px solid #E5E5E5;

        .price-container{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .label{
                color: #029D9D;
                font-size: 18px;
                font-weight: bold;
            }

            .rent{

                .currency{
                    font-size: 18px;
                    font-weight: bold;
                    color: #000000;
                    margin-right: 5px;
                }

                .price{
                    font-size: 18px;
                    font-weight: bold;
                    color: #000000;
                    margin-right: 5px;
                }

                .recurrence{
                    font-size: 18px;
                    font-weight: 600;
                }
            }
        }
    }
`;