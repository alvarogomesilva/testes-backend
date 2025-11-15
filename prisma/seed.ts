import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Starting database seeding...')

    // Check if seeding has already been done
    console.log('Checking if database has already been seeded...')
    const existingCategory = await prisma.category.findFirst({
        where: {
            slug: 'gravatas'
        }
    })

    if (existingCategory) {
        console.log('✅ Database has already been seeded. Skipping to avoid duplicate records.')
        console.log('Found existing category:', existingCategory.name)
        return
    }

    console.log('📝 No existing data found. Proceeding with seeding...')

    // Create Category
    console.log('Creating category...')
    const category = await prisma.category.create({
        data: {
            slug: 'gravatas',
            name: 'Gravatas'
        }
    })
    console.log('✅ Category created:', category.name)

    // Create CategoryMetadata
    console.log('Creating category metadata...')
    const categoryMetadata = await prisma.categoryMetadata.create({
        data: {
            id: 'gravata',
            name: 'Gravatas',
            categoryId: category.id
        }
    })
    console.log('✅ Category metadata created:', categoryMetadata.name)

    // Create Banners
    // console.log('Creating banners...')
    // const banners = await Promise.all([
    //     prisma.banner.create({
    //         data: {
    //             img: 'banner_promo_1.jpg',
    //             link: '/categories/camisas'
    //         }
    //     }),
    //     prisma.banner.create({
    //         data: {
    //             img: 'banner_promo_2.jpg',
    //             link: '/categories/algo'
    //         }
    //     })
    // ])
    // console.log('✅ Banners created:', banners.length)

    // Create MetadataValues
    console.log('Creating metadata values...')
    const metadataValues = await Promise.all([
        prisma.metadataValue.create({
            data: {
                id: 'node',
                label: 'Node',
                categoryMetadataId: 'gravata'
            }
        }),
        prisma.metadataValue.create({
            data: {
                id: 'react',
                label: 'React',
                categoryMetadataId: 'gravata'
            }
        }),
        prisma.metadataValue.create({
            data: {
                id: 'python',
                label: 'Python',
                categoryMetadataId: 'gravata'
            }
        }),
        prisma.metadataValue.create({
            data: {
                id: 'php',
                label: 'PHP',
                categoryMetadataId: 'gravata'
            }
        })
    ])
    console.log('✅ Metadata values created:', metadataValues.length)

    // Create Products
    console.log('Creating products...')
    const products = await Promise.all([
        prisma.product.create({
            data: {
                label: 'Gravata Kashimir',
                price: 45.00,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                categoryId: category.id
            }
        }),
        prisma.product.create({
            data: {
                label: 'Gravata Kashimir Slim',
                price: 49.90,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                categoryId: category.id
            }
        }),
        prisma.product.create({
            data: {
                label: 'Gravata Slim Xadrez',
                price: 54.00,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                categoryId: category.id
            }
        }),
        prisma.product.create({
            data: {
                label: 'Gravata Slim lisa',
                price: 53.00,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                categoryId: category.id
            }
        }),
        prisma.product.create({
            data: {
                label: 'Gravata Slim lisa',
                price: 53.00,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                categoryId: category.id
            }
        }),
        prisma.product.create({
            data: {
                label: 'Gravata Slim lisa',
                price: 53.00,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                categoryId: category.id
            }
        }),
        prisma.product.create({
            data: {
                label: 'Gravata Slim lisa',
                price: 53.00,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                categoryId: category.id
            }
        }),
        prisma.product.create({
            data: {
                label: 'Gravata Slim lisa',
                price: 53.00,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                categoryId: category.id
            }
        })
    ])
    console.log('✅ Products created:', products.length)

    // Create ProductImages for each product
    console.log('Creating product images...')
    const productImages = []
    for (const product of products) {
        const images = await Promise.all([
            prisma.productImage.create({
                data: {
                    productId: product.id,
                    url: `https://res.cloudinary.com/dz5h5pldf/image/upload/v1763238587/gravata-1_wizt1e.webp`
                }
            }),
            prisma.productImage.create({
                data: {
                    productId: product.id,
                    url: `https://res.cloudinary.com/dz5h5pldf/image/upload/v1763238587/gravata-3_ri498o.webp`
                }
            }),
            prisma.productImage.create({
                data: {
                    productId: product.id,
                    url: `https://res.cloudinary.com/dz5h5pldf/image/upload/v1763238587/gravata-2_wpctdq.webp`
                }
            }),
            prisma.productImage.create({
                data: {
                    productId: product.id,
                    url: `https://res.cloudinary.com/dz5h5pldf/image/upload/v1763238587/gravata-4_mbaakc.webp`
                }
            })
            ,
            prisma.productImage.create({
                data: {
                    productId: product.id,
                    url: `https://res.cloudinary.com/dz5h5pldf/image/upload/v1763238587/gravata-5_xuxij7.webp`
                }
            }),
            prisma.productImage.create({
                data: {
                    productId: product.id,
                    url: `https://res.cloudinary.com/dz5h5pldf/image/upload/v1763238587/gravata-6_hxejhl.webp`
                }
            }),
            prisma.productImage.create({
                data: {
                    productId: product.id,
                    url: `https://res.cloudinary.com/dz5h5pldf/image/upload/v1763238588/gravata-7_r6kmpk.webp`
                }
            }),
            prisma.productImage.create({
                data: {
                    productId: product.id,
                    url: `https://res.cloudinary.com/dz5h5pldf/image/upload/v1763238588/gravata-8_na76lm.webp`
                }
            })
        ])
        productImages.push(...images)
    }
    console.log('✅ Product images created:', productImages.length)

    // Create ProductMetadata for each product
    console.log('Creating product metadata...')
    const productMetadata = await Promise.all([
        prisma.productMetadata.create({
            data: {
                productId: products[0].id,
                categoryMetadataId: 'gravata',
                metadataValueId: 'react'
            }
        }),
        prisma.productMetadata.create({
            data: {
                productId: products[1].id,
                categoryMetadataId: 'gravata',
                metadataValueId: 'react'
            }
        }),
        prisma.productMetadata.create({
            data: {
                productId: products[2].id,
                categoryMetadataId: 'gravata',
                metadataValueId: 'python'
            }
        }),
        prisma.productMetadata.create({
            data: {
                productId: products[3].id,
                categoryMetadataId: 'gravata',
                metadataValueId: 'php'
            }
        })
    ])
    console.log('✅ Product metadata created:', productMetadata.length)

    console.log('🎉 Database seeding completed successfully!')
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
